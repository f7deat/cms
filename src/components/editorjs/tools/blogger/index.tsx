import '../../style.css';
import { IAPI, IEditor } from '../../typings';

type BloggerType = {
    blogger: {
        blogId: string;
        postId: string;
    }
}

class Blogger {

    data: BloggerType;
    api: IAPI;

    constructor(props: IEditor<BloggerType>) {
        this.data = props.data
        this.api = props.api;
    }

    static get toolbox() {
        return {
            title: 'Blogger',
            icon: '📰'
        };
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('form-group');
        const inputBlogId = document.createElement('input');
        inputBlogId.placeholder = 'Blog Id';
        inputBlogId.id = 'blogId';
        inputBlogId.value = this.data?.blogger?.blogId ?? '';
        inputBlogId.classList.add(this.api.styles.input);

        const inputPostId = document.createElement('input');
        inputPostId.placeholder = 'Post Id'
        inputPostId.id = 'postId';
        inputPostId.value = this.data?.blogger?.postId ?? '';
        inputPostId.classList.add(this.api.styles.input);

        wrapper.appendChild(inputBlogId);
        wrapper.appendChild(inputPostId);
        return wrapper as any;
    }

    save(e: any) {
        const blogId = e.querySelector('#blogId').value;
        const postId = e.querySelector('#postId').value;
        return {
            blogger: { blogId, postId }
        }
    }
}

export default Blogger