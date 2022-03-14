import { shallow, ShallowWrapper } from "enzyme";
import { ResultItem } from "../../components/ResultItem";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ activities: [] }),
  useDispatch: () => mockDispatch,
}));

describe("ActivityList", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    const mockQuestion = {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    };

    beforeEach(() => {
      wrapper = shallow(<ResultItem question={mockQuestion} answer={"True"} />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
