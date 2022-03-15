import { shallow, ShallowWrapper } from "enzyme";
import { IntroPage } from "../../pages/Intro";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ questions: [] }),
  useDispatch: () => mockDispatch,
}));

describe("IntroPage", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<IntroPage />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
