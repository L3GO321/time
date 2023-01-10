import { DateTimePretty } from "../../../DateTimePretty/DateTimePretty"

export const Video = (props) => {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      <DateTimePretty date={props.date} />
    </div>
  )
}


