import React from 'react'

function Card(props) {
  return (
    <>
       <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-6">
          <div className="flex justify-between ">
            <p className="font-bold ">{props.name}</p>
            <p className='font-bold'>Items:</p>
            <p>{props.items}</p>
          </div>
          <div className="flex  justify-between">
            <p>Price</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Card