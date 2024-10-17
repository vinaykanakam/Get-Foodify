const Contact=()=>{
    return(
        
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
            <p className="mb-2">Email: <a href="mailto:vinaykanakam65@gmail.com" className="text-blue-500">vinaykanakam65@gmail.com</a></p>
            <p className="mb-2">Role: Full Stack Developer</p>
            <p className="mb-6">Experience: React in Frontend, Java in Backend</p>
            <p>GitHub: <a href="https://github.com/vinaykanakam/Get-Foodify" className="text-blue-500" target="_blank" rel="noopener noreferrer">Get-Foodify Project</a></p>
            </div>
            <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page- Testing</h1>
            <form>
                <input 
                    type="text" 
                    className="border-black p-2 m-2" 
                    placeholder="name"/>    
                <input 
                    type="text" 
                    className="border-black p-2 m-2" 
                    placeholder="message"/>
                <button className="border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
            </div>
        </div>     
    )
}

export default Contact;