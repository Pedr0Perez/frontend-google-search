import "./style/global.css";
import "./style/light.css";
import "./style/header.css";
import "./style/content.css";
import "./style/footer.css";
import "./style/layout.css";
import Program from "./core/Program";
import AnchorControl from "./classes/AnchorControl";
import SearchRowInput from "./classes/SearchRowInput";

const core: Program = new Program(new AnchorControl(), new SearchRowInput());

core.execute();
