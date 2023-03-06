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
          <svg viewBox="0 0 136.5 50"><linearGradient id="a" gradientTransform="matrix(0 163.23 174.07 145.12628527 -77174.83 -36905.66000000001)" gradientUnits="userSpaceOnUse" x1="-168.4" x2="-168.27" y1="443.87" y2="443.81"><stop offset="0" stop-color="#f89324"/><stop offset="1" stop-color="#ffc000"/></linearGradient><linearGradient id="b" gradientTransform="matrix(222.78948411 -333.93246423 -333.93246423 -222.78948411 187120.5 41861.88)" gradientUnits="userSpaceOnUse" x1="-172.01" x2="-171.88" y1="445.51" y2="445.51"><stop offset="0" stop-color="#909090"/><stop offset=".38" stop-color="#6a6a6a"/><stop offset="1" stop-color="#3d3d3d"/></linearGradient><linearGradient id="c" gradientTransform="matrix(-131.79078918 -252.84442803 -252.84442803 131.79078918 90533.52 -102291.77)" gradientUnits="userSpaceOnUse" x1="-171.69" x2="-171.56" y1="447.17" y2="447.17"><stop offset="0" stop-color="#151515"/><stop offset=".49" stop-color="#333"/><stop offset="1" stop-color="#3d3d3d"/></linearGradient><linearGradient id="d" x2="-171.88" xlink:href="#b" y1="445.37" y2="445.37"/><circle cx="84.29" cy="29.14" fill="url(#a)" r="15.53"/><g fill-rule="evenodd"><path d="m60.49.37s.03.3.02.32c-1.21 4.83 1.67 12.31 1.67 17.59 0 12.59.42 21.57 6.58 30.85-23.13-.25-45.77-.82-67.1-1.66 2.56-20.95 25.95-38.76 58.84-47.11s0 0 0 0z" fill="url(#b)"/><path d="m60.49.36c5.32 26.32 29.2 46.63 58.58 48.87-6.55.06-13.13.08-19.77.08-10.31 0-20.5-.06-30.54-.19-.11 0-.22 0-.33 0-6.16-9.28-9.82-20.89-9.82-33.48 0-5.18-.04-10.24 1.13-14.99.03-.11.71-.18.74-.29z" fill="url(#c)"/><path d="m63.9 49.07c22.35-2.14 40.9-13.12 50.72-30.8 12.15 8.51 19.91 19.03 21.39 30.51-23.02.97-46.72.71-72.1.29z" fill="url(#d)"/></g></svg>
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
