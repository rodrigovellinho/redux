import ReactPlayer from 'react-player'

export default function ReactVideo() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=aezstCBHOPQ&list=RDaezstCBHOPQ&start_radio=1"
      />
    </div>
  )
}
