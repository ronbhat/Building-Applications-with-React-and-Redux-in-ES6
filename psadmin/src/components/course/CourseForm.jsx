import TextInput from '../common/TextInput.jsx';
import SelectInput from '../common/SelectInput.jsx';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return(
        <form>
            <h1>Manage Course</h1>
            <TextInput name='title'
                       label = 'Title'
                       value = {course.title}
                       onChange = {onChange}
                       error = {error.title}/>
            <SelectInput></SelectInput>
            <TextInput></TextInput>
            <TextInput></TextInput>
            <input type="text"/>
        </form>
    );
}