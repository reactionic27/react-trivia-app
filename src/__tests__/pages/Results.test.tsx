import { shallow, ShallowWrapper } from "enzyme";
import { ResultsPage } from "../../pages/Results";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ questions: [] }),
  useDispatch: () => mockDispatch,
}));

describe("ResultsPage", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<ResultsPage />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
