/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import Tab from './Tab'
import MediaTab from './MediaTab'
import FileTab from './FileTab'
import LinkTab from './LinkTab'

const showFile = ({ handleShowFile, content }) => {
	const [activeTab, setActiveTab] =useState(content)
	const [media, setMedia]=useState([
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716567877/chat-app-file/clr41jlqrnjhbpd3o18k.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716568884/chat-app-file/zvfkmesllv6rqeeardkw.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716564091/chat-app-file/n0goblcfufupp1dbuh0t.jpg'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/video/upload/v1716564050/chat-app-file/cmklt1lc6xponxsp3jxe.mp4'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716567877/chat-app-file/clr41jlqrnjhbpd3o18k.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716568884/chat-app-file/zvfkmesllv6rqeeardkw.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716564091/chat-app-file/n0goblcfufupp1dbuh0t.jpg'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/video/upload/v1716564050/chat-app-file/cmklt1lc6xponxsp3jxe.mp4'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716567877/chat-app-file/clr41jlqrnjhbpd3o18k.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716568884/chat-app-file/zvfkmesllv6rqeeardkw.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716564091/chat-app-file/n0goblcfufupp1dbuh0t.jpg'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/video/upload/v1716564050/chat-app-file/cmklt1lc6xponxsp3jxe.mp4'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716567877/chat-app-file/clr41jlqrnjhbpd3o18k.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716568884/chat-app-file/zvfkmesllv6rqeeardkw.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716564091/chat-app-file/n0goblcfufupp1dbuh0t.jpg'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/video/upload/v1716564050/chat-app-file/cmklt1lc6xponxsp3jxe.mp4'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716567877/chat-app-file/clr41jlqrnjhbpd3o18k.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716568884/chat-app-file/zvfkmesllv6rqeeardkw.png'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/image/upload/v1716564091/chat-app-file/n0goblcfufupp1dbuh0t.jpg'
		},
		{
			url:'https://res.cloudinary.com/daygzzzwz/video/upload/v1716564050/chat-app-file/cmklt1lc6xponxsp3jxe.mp4'
		}
	])
	const [file, setFile]=useState([
		{
			name:'file1',
			size:'10MB'
		},
		{
			name:'file2',
			size:'20MB'
		},
		{
			name:'file3',
			size:'30MB'
		},
		{
			name:'file4',
			size:'40MB'
		},
		{
			name:'file5',
			size:'50MB'
		},
		{
			name:'file6',
			size:'60MB'
		},
		{
			name:'file7',
			size:'70MB'
		},
		{
			name:'file8',
			size:'80MB'
		},
		{
			name:'file9',
			size:'90MB'
		},
		{
			name:'file10',
			size:'100MB'
		},
		{
			name:'file11',
			size:'110MB'
		},
		{
			name:'file12',
			size:'120MB'
		},
		{
			name:'file13',
			size:'130MB'
		},
		{
			name:'file14',
			size:'140MB'
		},
		{
			name:'file15',
			size:'150MB'
		},
		{
			name:'file16',
			size:'160MB'
		},
		{
			name:'file17',
			size:'170MB'
		},
		{
			name:'file18',
			size:'180MB'
		},
		{
			name:'file19',
			size:'190MB'
		},
		{
			name:'file20',
			size:'200MB'
		}
	])
	const [link, setLink]=useState([
		{
			url:'https://www.google.com'
		},
		{
			url:'https://www.facebook.com'
		},
		{
			url:'https://www.youtube.com'
		},
		{
			url:'https://www.google.com'
		},
		{
			url:'https://www.facebook.com'
		},
		{
			url:'https://www.youtube.com'
		},
		{
			url:'https://www.google.com'
		},
		{
			url:'https://www.facebook.com'
		},
		{
			url:'https://www.youtube.com'
		},
		{
			url:'https://www.google.com'
		},
		{
			url:'https://www.facebook.com'
		},
		{
			url:'https://www.youtube.com'
		},
		{
			url:'https://www.google.com'
		},
		{
			url:'https://www.facebook.com'
		},
		{
			url:'https://www.youtube.com'
		}
	])
	return (
		<div className='overflow-auto scrollbar w-full h-full'>
			<div className='w-full h-14 flex items-center gap-0'>
				<button onClick={handleShowFile} className='mx-3 rounded-full hover:bg-slate-100 w-9 h-9 flex justify-center items-center'>
					<FaArrowLeft size={15}/>
				</button>
				<p className='text-base font-semibold'>
               File phương tiện, file và liên kết
				</p>
			</div>
			<div className=" px-1 py-3 w-full h-auto flex items-center gap-1">
				<Tab label="File phương tiện" isActive={activeTab === 'media'} onClick={() => setActiveTab('media')} />
				<Tab label="File" isActive={activeTab === 'file'} onClick={() => setActiveTab('file')} />
				<Tab label="Liên kết" isActive={activeTab === 'link'} onClick={() => setActiveTab('link')} />
			</div>
			<div className='w-full h-auto px-3 py-1'>
				{activeTab === 'media' && (
					<MediaTab media={media}/>
				)}
				{activeTab === 'file' && (
					<FileTab file={file}/>
				)}
				{activeTab === 'link' && (
					<LinkTab link={link}/>
				)}
			</div>
		</div>
	)
}

export default showFile