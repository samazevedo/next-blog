const handler = (req, res) => {
    // check if the request is valid => if POST
    if (req.method === 'POST') {
        // extract the data from the request
        const { email, name, message } = req.body

        // validate the data
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            // if the data is not valid, send a 400 response
            res.status(422).json({ message: 'Invalid input.' })
            return
        }
        // store it in a database
        const newMessage = {
            email,
            name,
            message,
        }
        console.log(newMessage)

        // send a 201 response
        res.status(201).json({
            message: 'Message sent succesfully!',
            Message: newMessage,
        })
    }
}

export default handler
