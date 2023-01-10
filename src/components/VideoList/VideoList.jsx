import { Video } from "./components/Video/Video";

export const VideoList = (props) => {
  return props.list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}