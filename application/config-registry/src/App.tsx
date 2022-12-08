import "./App.css";

import * as React from 'react';
import Button from '@mui/material/Button';


export class ConfigRegistry {
  category?: string;
  code?: string;
  description?: string;
  value?: Object;
}

const categories: ConfigRegistry[] = [
  {
    category: "Applications",
    code: "ConfigRegistryTreeMode",
    description: "Config registry edit tree mode",
    value: false,
  },
  {
    category: "Applications",
    code: "IPLockoutMessageText",
    description: "Message to display when IP address is locked out of application",
    value: "Your IP Address has been locked out. Please try again",
  },
  {
    category: "Applications",
    code: "MaxUserNameAttempts",
    description: "Number of attempts to allow IP address to enter username",
    value: "10",
  },
  {
    category: "LetterTemplating",
    code: "LetterTemplates",
    description: "Toggle Letter Templates",
    value: true,
  },
  {
    category: "LetterTemplating",
    code: "LetterTemplatesDefaultCss",
    description: "Sets the default css for the margin on all new letters",
    value: "body { margin: 1in }",
  },
];

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

  const setCategory = (category: ConfigRegistry) => {
    alert(category.category);
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
                      <Button onClick={() => setCategory(category)}>{category.code}</Button>
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
                  <input id="configCode" type="text" />
                </td>
                <td>
                  <input id="configDescription" type="text" />
                </td>
                <td>
                  <input id="configValue" type="text" />
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
