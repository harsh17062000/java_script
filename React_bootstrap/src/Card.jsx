const Card = () => {
    return (
        <>
        <div className=" container" style={{height:"100vh"}}>
            <h1 className="text-center">Our Feature Tour</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero blanditiis molestias, aspernatur incidunt rem animi ea fugiat necessitatibus numquam labore, dolore amet doloremque eos dicta nesciunt deserunt, voluptatum repudiandae praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut repellat dolorem cumque nisi vero similique necessitatibus, quisquam tempora quam expedita vitae, provident saepe veniam harum ipsam corporis, reprehenderit excepturi.</p>
            <div className="row" style={{justifyContent: "space-between"}}>
            <div className="card text-center" style={{width: "25%" , margin: "20px"}}>
                <img src="https://images.unsplash.com/photo-1423145369430-a9ea0de096cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vdyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                <div class="card-body" style={{margin: "10px"}}>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div style={{display: "flex",justifyContent:"space-between", alignItems:"center"}}>
                        <div>
                         <h1 style={{fontSize: "30px"}}>$856</h1>
                         </div>
                    <div>
                    <a href="#" class="btn btn-primary" >Go somewhere</a>
                    </div>
                    </div>
                </div>   
            </div>
            <div className="card text-center" style={{width: "25%" , margin: "20px"}}>
                <img src="https://images.unsplash.com/photo-1423145369430-a9ea0de096cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vdyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                <div class="card-body" style={{margin: "10px"}}>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div style={{display: "flex",justifyContent:"space-between", alignItems:"center"}}>
                        <div>
                         <h1 style={{fontSize: "30px"}}>$856</h1>
                         </div>
                    <div>
                    <a href="#" class="btn btn-primary" >Go somewhere</a>
                    </div>
                    </div>
                </div>   
            </div>
            <div className="card text-center" style={{width: "25%" , margin: "20px"}}>
                <img src="https://images.unsplash.com/photo-1423145369430-a9ea0de096cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vdyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                <div class="card-body" style={{margin: "10px"}}>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div style={{display: "flex",justifyContent:"space-between", alignItems:"center"}}>
                        <div>
                         <h1 style={{fontSize: "30px"}}>$856</h1>
                         </div>
                    <div>
                    <a href="#" class="btn btn-primary" >Go somewhere</a>
                    </div>
                    </div>
                </div>   
            </div>
            </div>
        </div>
        </>
    )
}

export default Card