const router = require ("express").Router()
const {
    getAllStories,
    getAStory,
    getAllUserStories,
    getAUserStory,
    createStory, 
    editStory,
    deleteStory
} = require("../controller/storyController");


router.get("/all", getAllStories);
router.get("/all/:storyId",getAStory);

// route for user
router.route("/").get(getAllUserStories).post(createStory);
router.route("/:storyId").get(getAUserStory).patch(editStory).delete(deleteStory);


module.exports = router;