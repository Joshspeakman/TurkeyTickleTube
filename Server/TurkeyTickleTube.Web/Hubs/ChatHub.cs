using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace TurkeyTickleTube.Web
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("receiveMessage", user, message);
        }
    }
}