using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.EF.Reposetories
{
    public class AIIntegrationService
    {
        public async Task<string> GenerateAIResponse(string prompt)
        {
            var startInfo = new ProcessStartInfo
            {
                FileName = "index.js",
                Arguments = $"index.js \"{prompt}\"",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            using var process = new Process { StartInfo = startInfo };
            process.Start();

            var output = await process.StandardOutput.ReadToEndAsync();
            var error = await process.StandardError.ReadToEndAsync();

            if (!string.IsNullOrEmpty(error))
            {
                throw new Exception($"Node.js Error: {error}");
            }

            return output.Trim();
        }
    }
}
