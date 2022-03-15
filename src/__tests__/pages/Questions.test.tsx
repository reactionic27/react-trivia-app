import { shallow, ShallowWrapper } from "enzyme";
import { QuestionsPage } from "../../pages/Questions";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ questions: [] }),
  useDispatch: () => mockDispatch,
}));

describe("QuestionsPage", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<QuestionsPage />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
