import {
  FaFacebook,
  FaMastodon,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";

function Media({ data }) {
  return (
    <div class="detail__social">
      <ul>
        <li>
          <a
            href={`https://www.fosstodon.org/share?text=${data.post.title}&url=https%3A%2F%2Fblog.amerey.eu/tech-posts/${data.post.slug}`}
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="mastodon"
          >
            <FaMastodon />
          </a>
        </li>

        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.amerey.eu/tech-posts/${data.post.slug}`}
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="facebook"
          >
            <FaFacebook />
          </a>
        </li>

        <li>
          <a
            href={`https://twitter.com/intent/tweet?text=${data.post.title}&url=https%3A%2F%2Fblog.amerey.eu/tech-posts/${data.post.slug}`}
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="twitter"
          >
            <FaTwitter />
          </a>
        </li>

        <li>
          <a
            href={`mailto:?subject=${data.post.title}&amp;body=https://blog.amerey.eu/tech-posts/${data.post.slug}`}
            rel="nofollow noreferrer"
            aria-label="email"
          >
            <FaRegEnvelope />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Media;
