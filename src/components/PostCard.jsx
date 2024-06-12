import React from 'react'
import appwriteService from '../appWrite/config'
import { Link } from 'react-router-dom'

import Tilt from 'react-vanilla-tilt'

function PostCard({ $id, title, featuredImage, desc }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='flex flex-col px-[26px] py-[28px] gap-3 items-start rounded-[19px] background: #fff 
      shadow-[0px_103px_29px_0px_rgba(0,0,0,0.00),0px_66px_26px_0px_rgba(0,0,0,0.01),0px_37px_22px_0px_rgba(0,0,0,0.05),0px_16px_16px_0px_rgba(0,0,0,0.09),0px_4px_9px_0px_rgba(0,0,0,0.10)]'>

        <div className='justify-center mb-4 w-[432px] h-[263px] overflow-hidden'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-full object-cover rounded-lg' />
        </div>
        <h6 className='text-2xl font-medium capitalize'>{title}</h6>
        <h6 className='text-lg font-semibold capitalize'>{desc}</h6>
      </div>

    </Link>
  )
}

export default PostCard