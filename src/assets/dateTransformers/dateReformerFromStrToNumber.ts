import moment from "moment"

export default function transformDateFromStrToNumber(date: string) {

    const modifiedDate = "".concat(
        date.slice(3, 5),
        ".",
        date.slice(0, 2),
        ".",
        date.slice(6, 10)
    )
    return new Date(modifiedDate).getTime()
}

