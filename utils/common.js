export const errorHandler = (data, res, code = 400) => {
    res.status(code).json({
        hasError: true,
        errorMessage: data
    })
}

export const responseHandler = (data, res, code = 200) => {
    res.status(code).json({
        hasError: false,
        body: data
    })
}

export const validateAllOnce = (fields) => {
    const {name}=fields;
    console.log("burası validateAllOnce gelen değerler ",fields)
    console.log("name",name)
}


