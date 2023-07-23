import { byCategory, getCategories } from "./model.js"

export default {
    GET_CATEGORIES: async (_, res) => {
        const categories = await getCategories()
        if(categories) {
            res.status(200).json({
                status: 200,
                data: categories
            })
        } else {
            res.status(400).json({
                status: 400,
                message: "Server Error"
            })
        }
    },
    BY_CATEGORY: async (req, res) => {
        const { id } = req.params
        const posts = await byCategory(id)
        if(posts) {
            res.status(200).json({
                status: 200,
                data: posts
            })
        } else {
            res.status(400).json({
                status: 400,
                message: "Server Error"
            })
        }
    }
}