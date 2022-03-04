const firsttest = async function (req, res){
    let data = req
    console.log(data)
}

const  secondtest= async function (req, res){
    console.log({msg:"second-test response set sucessfully"})
}

const thirdtest = async function (req, res){
    console.log({msg:"Third-test response set sucessfully"})
}

const fourthtest = async function (req, res){
    console.log({msg:"fourth-test response set sucessfully"})
}

module.exports.firsttest = firsttest
module.exports.secondtest = secondtest
module.exports.thirdtest = thirdtest
module.exports.fourthtest = fourthtest


