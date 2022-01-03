import React from 'react'

function InputFile() {
    const [file1, setFile1] = React.useState('./logo192.png');
    const[file2,setFile2] = React.useState('./logo512.png');
    const data = [
        {
            id:1,
            image : file1
        },
        {
            id : 2,
            image : file2
        }
    ]
    const imageHandler = e =>{
        const reader = new FileReader();
        console.log(e.target.value)
        reader.onload = () =>{
            if(reader.readyState === 2){
                setFile1(reader.result);
                setFile2(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div>
            {
                data.map((data,index) => (
                    <>
                    <input type = "file" onChange={imageHandler}/>
                    <img src={data.image}/>
                    </>
                ))
            }
        </div>
    )
}

export default InputFile
