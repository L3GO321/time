import { DateTime } from "../DateTime/DateTime";

const withPrettyDate = (Component) =>
  (props) => {
    const getData = () => {
      const date = new Date(props.date).getTime()
      const current = new Date().getTime()
      const diff = current - date

      if (diff < 1000 * 60) {
        return 'меньше минуты назад'
      }

      if (diff < 1000 * 60 * 60) {
        const minutes = Math.floor(diff / (1000 * 60))
        return `${minutes} минут назад`
      }

      if (diff < 1000 * 60 * 60 * 24) {
        const hours = Math.floor(diff / (1000 * 60 * 60))
        return `${hours} часов назад`
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      return `${days} дней назад`
    }

    return <Component date={getData()} />
  }


export const DateTimePretty = withPrettyDate(DateTime)