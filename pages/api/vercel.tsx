import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          backgroundColor: 'white',
          backgroundImage: 'radial-gradient(circle, rgba(253,162,29,0.23153011204481788) 50%, rgba(0,0,0,0.39959733893557425) 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        </div>
      
      
          <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px 50px',
            margin: '0 42px',
            fontSize: 50,
            fontWeight: 600,
            width: 'auto',
            maxWidth: 700,
            textAlign: 'center',
            backgroundColor: 'black',
            color: '#f89223',
            lineHeight: 1.4,
          }}
        >
          ownCloud Infinite Scale on a VPS
      
        </div>
      
        <div
          style={{
            display: 'flex',
            fontSize: 35,
            fontWeight: 600,
            letterSpacing: 0,
            color: 'black',
            marginTop: 30,
            lineHeight: 1.6,
          }}
        >
              <img
                width="137"
                height="50"
                src={`https://i.imgur.com/5ZhqKN6.png`}
       
              />
               ae3.ch
        </div>
      
      
      
      
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
