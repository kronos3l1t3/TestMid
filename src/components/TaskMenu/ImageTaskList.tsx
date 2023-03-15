import React from 'react';
import LazyImage from 'react-lazy-blur-image';

interface ImageProps {
	src: string,
	style: string

	placeHolder: string

	blurImage: string
}
const CustomImage = ({ src, style, placeHolder, blurImage }: ImageProps) => {
	return (
		<LazyImage
			placeholder={placeHolder}
			uri={blurImage}
			render={(src, style) => <img src={src} style={style} />}
		/>
	);
};

export default CustomImage