function Condicao(){
    let urls = [
        'https://images.unsplash.com/photo-1728930684293-691453ac6f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
        null,
        'https://images.unsplash.com/photo-1729172043414-f44108ca3e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
        null,
        'https://images.unsplash.com/photo-1729465239753-e9943726d922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D'
    ]

    for(let i = 0; i <= urls.length - 1; i++){
        if(urls[i] !== null){
            
        }
        return (
            <>
            <ul><img src={urls[i]} alt="" /></ul>
            </>
        )
    }
}export default Condicao