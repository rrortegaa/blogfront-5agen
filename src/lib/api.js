
const methods = {

    async getPosts() {
        const response = await fetch('http://localhost:8080/posts')

        const payload = await response.json()
        
        if (!response.ok) throw new Error(payload.message)

        return payload.data.posts
    },

    async addPost(post) {
        const response = await fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...post,
                readTime: post.description.length,
                creationDate: new Date()
            })
        })
        const payload = await response.json()

        if(!response.ok) throw new Error(payload.message)

        return payload.data.post
    },

    async getPostById(id) {
        const response = await fetch(`http://localhost:8080/posts/${id}`)
            
        const payload = await response.json()

        if(!response.ok) throw new Error(payload.message)

        return payload.data.post
    },

    async Login(email, password) {
        const response =  await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const payload = await response.json()

        if(!response.ok) throw new Error(payload.message)

        return payload.data.isLoggedIn
        // return payload.data version de Michael
    },

    async validateSession(token) {
        const response = await fetch('http://localhost:8080/validateSession', {
            headers: {
                authorization: token
            }
        })

        const payload = await response.json()

        if(!response.ok) throw new Error(payload.message)

        return payload.data
    }
}

export default methods