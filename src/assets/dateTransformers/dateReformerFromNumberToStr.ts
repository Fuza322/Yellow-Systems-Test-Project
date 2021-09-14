import moment from "moment"

export default function transformDateFromNumberToStr(date: number) {
    const modifiedDate = moment(date).format("L").split("/").join(".")
    return "".concat(
        modifiedDate.slice(3, 5),
        ".",
        modifiedDate.slice(0, 2),
        ".",
        modifiedDate.slice(6, 10)
    )
}

