import React from 'react';
import LazyImage from 'react-lazy-blur-image';

interface ImageProps {
	src: any,
	style: any

	placeHolder: string

	blurImage: string
}
const CustomImage = ({ src, style, placeHolder, blurImage }: ImageProps) => {
	return (
		<LazyImage
			placeholder={placeHolder}
			uri={blurImage}
			render={( src: any, style: any ) => {
				return <img src={src} style={style}/>;
			}}
		/>
	);
};

export default CustomImage;