// Code Keypad Component Here

function Keypad (){
    function handeChange(){
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" onChange={handeChange}/>
        </div>
    )
}

export default Keypad;