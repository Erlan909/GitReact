import React from 'react'

export default function Output({data}) {
    return (
        <div>
           { data?
           <>
           <div className='bio'>
              <h3>{data?.login}</h3>
              <img src={data?.avatar_url} style={{width:'320'}}/>
              <h3>{data?.id}</h3>
              <h3>{data?.bio}</h3>
              <h3>{data?.location}</h3>

           </div>

           </>
        :<h5>подожди......</h5>  }
        </div>
    )
}