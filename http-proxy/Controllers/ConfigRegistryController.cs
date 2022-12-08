using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace http_proxy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConfigRegistryItemController : ControllerBase
    {

        private readonly ILogger<ConfigRegistryItem> _logger;

        public ConfigRegistryItemController(ILogger<ConfigRegistryItem> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ConfigRegistryItem> Get()
        {
            yield return new ConfigRegistryItem{
              category = "Applications",
              code = "ConfigRegistryTreeMode",
              description =  "Config registry edit tree mode",
              value = "false"
            };
          yield return new ConfigRegistryItem{
              category =  "Applications",
              code =  "IPLockoutMessageText",
              description =  "Message to display when IP address is locked out of application",
              value =  "Your IP Address has been locked out. Please try again"
            };
            yield return new ConfigRegistryItem{
              category =  "Applications",
              code =  "MaxUserNameAttempts",
              description =  "Number of attempts to allow IP address to enter username",
              value =  "10"
            };
          yield return new ConfigRegistryItem {
              category =  "LetterTemplating",
              code =  "LetterTemplates",
              description =  "Toggle Letter Templates",
              value =  "true"
            };
          yield return new ConfigRegistryItem {
              category =  "LetterTemplating",
              code =  "LetterTemplatesDefaultCss",
              description =  "Sets the default css for the margin on all new letters",
              value =  "body { margin =  1in }"
            };
  }
        
    }
}
