import React from "react";
import "./App.css";

// interface ConfigRegistry {
//   code: string;
//   description: string;
//   value: boolean;
// }

const App = () => {
  // const { data, status } = useQuery(["registry", getRegistryValues(), options]);

  // const { mutate, mutateAsync } = useMutation(setSomeValue(), options)

  // const someProperty = useMemo(() => {
  //   return compileSomeProperty()
  // })

  // useEffect(() => {
  //   getSomethingWhenPropsChanges(props)
  // }, [props])

  // useEffect(() => {
  //   getSomethingElseOnce()
  // }, [])

  // useEffect(() => {
  //   doSomethingEveryRender()
  // })

  return (
    <>
      <table>
        <tr>
          <td className="navigation">
            <table>
              <tr>
                <td>Applications</td>
                <td>Letter Templating</td>
              </tr>
            </table>
          </td>
          <td className="content">
            <table>
              <tr>
                <th>Code</th>
                <th>Description</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};

export default App;
