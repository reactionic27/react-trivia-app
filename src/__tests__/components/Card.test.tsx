import { shallow, ShallowWrapper } from "enzyme";
import { QuestionCard } from "../../components/Card";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ questions: [] }),
  useDispatch: () => mockDispatch,
}));

describe("QuestionCard", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    const mockFn = jest.fn();
    beforeEach(() => {
      wrapper = shallow(
        <QuestionCard title="Test Title" handleClick={mockFn} />
      );
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
