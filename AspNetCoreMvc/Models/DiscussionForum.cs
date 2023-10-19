using System.ComponentModel.DataAnnotations;

namespace AspNetCoreMvc.Models
{
    public class DiscussionForum
    {
        public int Id { get; set; }

        [Display(Name = "Post Date")]
        public DateTime PostDate { get; set; }
        [Display(Name = "User Name")]
        public string UserName { get; set; }
        [Required]
        [Display(Name = "Topic Title")]
        public string TopicTitle { get; set; }
        [Required]
        [Display(Name = "Message Content")]
        public string MessageContent { get; set; }
        [Display(Name = "Like")]
        public int Like { get; set; }
    }

}
