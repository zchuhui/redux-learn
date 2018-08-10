import store from "./store/index";
import { addArticle } from "./actions/index";

// 注册store跟addArticle，这是控制台就可以访问了
window.store = store;
window.addArticle = addArticle;