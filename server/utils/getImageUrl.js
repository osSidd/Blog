function getImageUrl(req, type){
    const port = process.env.PORT
    const base = `${req.protocol}://${req.hostname}:${port}/images`
    switch(type){
        case 'cover':
            return `${base}/blog/${req.file.filename}`
        case 'user':
            return `${base}/user/${req.file.filename}`
        default:
            return base;
    }
}

module.exports = getImageUrl