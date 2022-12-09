import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { ConfigRegistry, useConfigRegistry, useCreateConfigRegistry } from "./api/configRegistry";
import { useState, SyntheticEvent } from "react";

const App = () => {
  // const { data, status } = useQuery(["registry"], getRegistryValues(), options]);

  // const { mutate, mutateAsync } = useMutation(setSomeValue(), options)

  // const someProperty = useMemo(() => {
  //   return compileSomeProperty()
  // }, [])

  // useEffect(() => {
  //   getSomethingWhenPropsChanges(props)
  // }, [props])

  // useEffect(() => {
  //   getSomethingElseOnce()
  // }, [])

  // useEffect(() => {
  //   doSomethingEveryRender()
  // })

  const { categories } = useConfigRegistry();
  const { mutateAsync, error, isError, isLoading, isSuccess } = useCreateConfigRegistry();

  // const [currentStateValue, fnSetStateValue] = useState(initialStateValue?)
  const [formData, setFormData] = useState({
    code: "",
    description: "",
    value: "",
  });

  // FYI: different syntaxes for dealing with component state
  // // class based syntax
  // setState({ foo: 'bar' })

  // // useState syntax
  // setState({ ...state, foo: 'bar' })

  const setCategory = (category: ConfigRegistry) => {
    alert(category.category);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const result = await mutateAsync({
        ...formData,
        category: "someCategory",
      });
    } catch (err) {
      alert("There was an error!");
    } finally {
      alert("Posted data with great success!");
    }
  };

  return (
    <div>
      <table>
        <tr>
          <td className="navigation">
            <table>
              {categories.map((category: ConfigRegistry) => {
                return (
                  <tr>
                    <td>
                      <Button color="primary" variant="contained" onClick={() => setCategory(category)}>
                        {category.code}
                      </Button>
                    </td>
                  </tr>
                );
              })}
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
                  <input id="configCode" type="text" name="code" value={formData.code} onChange={handleChange} />
                </td>
                <td>
                  <input
                    id="configDescription"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input id="configValue" type="text" name="value" value={formData.value} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <Button color="success" variant="contained" onClick={handleSubmit}>
                    Post
                  </Button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default App;
