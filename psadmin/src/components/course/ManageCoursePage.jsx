import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm.jsx';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };  

        this.updateCourseState = this.updateCourseState.bind(this);
    }

    updateCourseState(event) {
        const feild = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[feild] = event.target.value;
        return this.setState({course: course});
    }

    render() {
        return(
            <div>
                <CourseForm 
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = {id: '', watchHref: '', title: '', authorId:'', length: '', category: '', value: ''};

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName 
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);