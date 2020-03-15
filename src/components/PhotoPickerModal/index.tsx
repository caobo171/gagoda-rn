/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect, useCallback, useMemo, memo  } from 'react';
import {
    TouchableOpacity,
    RefreshControl
} from 'react-native';

import Touchable from '@components/UI/Touchable';
import Icon from 'react-native-vector-icons/AntDesign';
import { RecyclerListView, LayoutProvider, DataProvider } from "recyclerlistview";

import Modal from 'react-native-modal'

import CameraRoll from '@react-native-community/cameraroll'
import styled from 'styled-components/native'
import useEffectOnce from 'react-use/lib/useEffectOnce'
import useAsyncFn from 'react-use/lib/useAsyncFn'
import { ImagePickerResponse, WindowDimension } from './types'
import ImageItem from './ImageItem';
import { requestReadStoragePermission } from '@/services/permission';
import NodataView from './NodataView';

const PAGINATION = 15


const StyledModal = styled(Modal) <{ backgroundColor: string }>`
  margin: 0 ;
  padding: 0;
  background-color: ${props => props.backgroundColor};
  flex-direction: column;
  justify-content: flex-start;
`

const StyledHeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%
`

const StyledDescription = styled.Text`
  margin-left: 8px;
`

const StyledIconImage = styled(Icon)`
  height: 14px;
  width: 14px;
  margin: 12px;
`

const StyledSendText = styled.Text<{ textColor: string }>`
  letter-spacing: 2px;
  color: ${props => props.textColor};
`
const StyledButton = styled(Touchable) <{ buttonColor: string }>`
  height: 40px;
  position: absolute;
  background-color: ${props => props.buttonColor};
  border-radius: 20px;
  margin: auto;
  width: ${WindowDimension.WIDTH * 80 / 100}px;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  left : ${WindowDimension.WIDTH * 10 / 100}px;
  margin-left: auto;
  margin-right: auto;
`
interface PhotoPickerModalProps {
    endingPickImageHandle: (images: ImagePickerResponse[]) => void,
    isVisible: boolean,
    onCancelHandle: () => void;
    sendButtonTitle?: string,
    limitImageNumber?: number,
    overLimitedImageNumberHandle?: () => void,
    backgroundColor?: string,
    textColor?: string,
    buttonColor?: string
}



const PhotoPickerModal = memo((props: PhotoPickerModalProps) => {

    const [images, setImages] = useState<ImagePickerResponse[]>([])


    const dataProvider = useMemo(()=>new DataProvider((cell1: ImagePickerResponse, cell2: ImagePickerResponse) => {
        return cell1.uri !== cell2.uri
    }).cloneWithRows(images),[images])

    const [selectItemsObject, setSelectItemsObject] = useState<{
        [key: string]: {
            image: ImagePickerResponse,
            order: number
        }
    }>({})

    const [pageInfo, setPageInfo] = useState({
        has_next_page: true,
        end_cursor: null
    })


    const loadMoreImages = useCallback(async () => {
        let res: any = null
        if (pageInfo.has_next_page && pageInfo.end_cursor === null) {
            res = await CameraRoll.getPhotos({
                first: 30,
            })
        } else if (pageInfo.has_next_page) {
            res = await CameraRoll.getPhotos({
                first: PAGINATION,
                after: pageInfo.end_cursor
            })
        }
        if (res) {
            await setPageInfo(res.page_info)
            const resImages: ImagePickerResponse[] = res.edges.map(e => {
                return {
                    groupName: e.node.group_name,
                    uri: e.node.image.uri,
                    height: e.node.image.height,
                    width: e.node.image.width,
                    fileName: e.node.image.filename,
                    timestamp: e.node.timestamp
                }
            })
            let listData = images;
            let data = listData.concat(resImages)
            setImages(data)
        }
    }, [images, pageInfo])

    useEffectOnce(() => {
        (async () => {
            const res = await requestReadStoragePermission()
            if (res) {
                await loadMoreImages()
                await loadMoreImages()
            }
        })()

    })

    const endPickImageHandle = useCallback(()=>{
        props.endingPickImageHandle(Object.keys(selectItemsObject)
        .map(item => selectItemsObject[item].image))

        reset()
    },[selectItemsObject])

    const reset = useCallback(() => {
        setSelectItemsObject({})
    },[])


    useEffect(()=>{
        if(props.isVisible){
            refresh();
        }
    },[props.isVisible])

    const [state, refresh ] = useAsyncFn(async ()=>{
        await reset()
        await setImages([]);
        await setPageInfo({
            has_next_page: true,
            end_cursor: null
        })
        await setTimeout(async ()=>{
            await loadMoreImages()
            await loadMoreImages()
        }, 300)
    },[])

    const onSelectHandle = useCallback((image: ImagePickerResponse) => {
        const length = Object.keys(selectItemsObject).length
        let data = { ...selectItemsObject }


        if (data[image.uri]) {
            const keys = Object.keys(data)
            for (let i = 0; i < keys.length; i++) {
                if (data[keys[i]].order > data[image.uri].order) {
                    data[keys[i]].order -= 1;
                }
            }

            delete data[image.uri]
        } else {

            if (props.limitImageNumber && length >= props.limitImageNumber) {
                props.overLimitedImageNumberHandle && props.overLimitedImageNumberHandle();
                return
            }

            data[image.uri] = {
                order: length + 1,
                image: image
            }
        }
        setSelectItemsObject(data)
    },[selectItemsObject])


    const renderItem =useCallback((type, data: ImagePickerResponse) => {
        return <ImageItem
    
            buttonColor={props.buttonColor}
            textColor={props.textColor}
    
            image={data}
            onSelect={onSelectHandle}
            selected={selectItemsObject[data.uri] ? true : false}
            order={selectItemsObject[data.uri] ? selectItemsObject[data.uri].order : null}
    
        />
    },[selectItemsObject, onSelectHandle])

    const numberSelectedItem = useMemo(()=>Object.keys(selectItemsObject).length , [selectItemsObject])
    return (
        <StyledModal
            backgroundColor={props.backgroundColor ? props.backgroundColor : '#FFFFFF'}
            isVisible={props.isVisible}>
            <StyledHeaderWrapper>
                <TouchableOpacity onPress={props.onCancelHandle}>
                    <StyledIconImage
                        name={'close'}
                    />
                </TouchableOpacity>

                <StyledDescription >{'Photos'} </StyledDescription>
            </StyledHeaderWrapper>

            {images.length > 0  ? <RecyclerListView

                dataProvider={dataProvider}
                onScroll={loadMoreImages}
                rowRenderer={renderItem}
                layoutProvider={new LayoutProvider(index => {
                    return 'NORMAL'
                }, (type, dim) => {
                    dim.width = WindowDimension.WIDTH / 3;
                    dim.height = WindowDimension.WIDTH / 3;
                })}

                renderAheadOffset={10}
                scrollViewProps={{
                    refreshControl: (
                      <RefreshControl
                        refreshing={state.loading}
                        onRefresh={refresh}
                      />
                    )
                  }}
                
            /> : <NodataView/>
            }

            {numberSelectedItem > 0 &&
                <StyledButton
                    buttonColor={props.buttonColor ? props.buttonColor : '#1f96ff'}
                    onPress={endPickImageHandle}>
                    <StyledSendText textColor={props.textColor ? props.textColor : '#FFFFFF'}>
                        {`${props.sendButtonTitle ? props.sendButtonTitle : 'Send'}`.toUpperCase()
                        + ` ${numberSelectedItem > 1 ? numberSelectedItem : ''}`}
                    </StyledSendText>

                </StyledButton>}
        </StyledModal>
    );
})


export default PhotoPickerModal;