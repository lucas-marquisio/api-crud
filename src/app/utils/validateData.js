const ValidateData = (data, message) => {
  if(data == undefined || data == "") throw { status: 400, message }
}

module.exports = ValidateData