import ChangeText from "./modules/ChangeText";
import StoryTransition from "./modules/StoryTransition";

const changeText = new ChangeText();
const storyTransition = new StoryTransition();
setInterval(changeText.animateText, 2500);
