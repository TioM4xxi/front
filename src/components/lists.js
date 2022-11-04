
export default function lists(props) {

    const data = props.data

    return (

    <div className="divlistusers">

        <h1>Userlist:</h1>
    

            {data.map((data) => {

                return (
                <div className="divusers">
                    
                            <h2>Username: {data.username}</h2>
                            <h2>Name: {data.name}</h2>
                            <h2>Age: {data.age}</h2>
                            <h2>Password: {data.password}</h2>
                            <h2>E-mail: {data.email}</h2>
            


                </div>
                )

                })
        
        
            }



    
    </div>

    )

}