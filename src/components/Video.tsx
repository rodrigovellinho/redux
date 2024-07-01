import ReactPlayer from 'react-player'
import { useAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../store/slices/player'

export default function ReactVideo() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        onEnded={handlePlayNext}
      />
    </div>
  )
}
