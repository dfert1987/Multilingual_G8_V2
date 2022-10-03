import React, { useState, useEffect } from 'react';
import { Unit4Letter } from '../../Assets/Data/Unit4Letter';
import { Unit4AuthenticText } from '../../Assets/Data/Unit4AuthenticText';
import { Unit4SelectionSupport } from '../../Assets/Data/Unit4SelectionSupport';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
import TOCEditIcon from '../../Assets/Icons/TOCEditIcon.svg';
import '../../Styles/Resources.css';

export const Unit4Resources = () => {
    const [spanish, setSpanish] = useState();
    const [portuguese, setPortuguese] = useState();
    const [haitian, setHaitian] = useState();

    useEffect(() => {
        let justSpanish = Unit4Letter.map((item) => {
            return item.Spanish;
        });
        setSpanish(justSpanish);
        let justPort = Unit4Letter.map((item) => {
            return item.Portuguese;
        });
        setPortuguese(justPort);
        let justHaitian = Unit4Letter.map((item) => {
            return item.HaitianCreole;
        });
        setHaitian(justHaitian);
    }, []);

    const stripes = (index) => {
        if (index === 0 || index % 2 === 0) {
            return 'white';
        } else {
            return 'tan';
        }
    };

    const firstColumn = () => {
        if (Unit4Letter) {
            return Unit4Letter.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons gloss ${stripes(
                                index
                            )}`}>
                            <p className='icon-input'> </p>
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const showSpan = () => {
        if (spanish) {
            return spanish.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='icon-input svg'
                                        alt='Spanish Parent Letter Icon'
                                        src={TOCEditIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <p className='icon-input'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    const showPort = () => {
        if (portuguese) {
            return portuguese.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='icon-input svg'
                                        alt='Portuguese Parent Letter Icon'
                                        src={TOCEditIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <p className='icon-input'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    const showHaitian = () => {
        if (haitian) {
            return haitian.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item !== 'na' ? (
                            <div
                                className={`info-row icons gloss ${stripes(
                                    index
                                )}`}>
                                <a href={item}>
                                    <img
                                        className='icon-input svg'
                                        alt='Haitian Parent Letter Icon'
                                        src={TOCEditIcon}
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={`info-row icons gloss${stripes(
                                    index
                                )}`}>
                                <p className='icon-input'> </p>
                            </div>
                        )}
                    </React.Fragment>
                );
            });
        }
    };

    const bookColumn = () => {
        if (Unit4AuthenticText) {
            return (
                <div className='info-row book'>
                    <p className='text-title'>{Unit4AuthenticText.Title}</p>
                    <p className='type-author'>
                        {Unit4AuthenticText.Type} by {Unit4AuthenticText.Author}
                    </p>
                </div>
            );
        }
    };

    const bookIcon = () => {
        if (Unit4AuthenticText) {
            return (
                <div className='info-row book icon'>
                    <a href={Unit4AuthenticText.Link}>
                        <img
                            className='icon-input tall-grid unit4'
                            alt='Authentic Text PDF Icon'
                            src={PDFIcon}
                        />
                    </a>
                </div>
            );
        }
    };

    const selectionsColumn = () => {
        if (Unit4SelectionSupport) {
            return Unit4SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row unit4 ${stripes(index)} tall`}>
                            {item.Excerpt ? (
                                <p className='title-from'>
                                    <i className='from'>from </i>
                                    {item.Selection}
                                </p>
                            ) : (
                                <p className='title-from'>{item.Selection}</p>
                            )}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const multiSummariesColumn = () => {
        if (Unit4SelectionSupport) {
            return Unit4SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections unit4 ${stripes(
                                index
                            )} tall`}>
                            {item.MultilingualSummary !== 'NA' ? (
                                <a href={item.MultilingualSummary}>
                                    <img
                                        className='icon-input tall unit4'
                                        alt='Multilingual Summary PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const adoptedColumn = () => {
        if (Unit4SelectionSupport) {
            return Unit4SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections unit4 ${stripes(
                                index
                            )} tall`}>
                            {item.Summary !== 'NA' ? (
                                <a href={item.Summary}>
                                    <img
                                        className='icon-input tall unit4'
                                        alt='Adapted Text PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const englishSketch = () => {
        if (Unit4SelectionSupport) {
            return Unit4SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections unit4 ${stripes(
                                index
                            )} tall`}>
                            {item.TextSketchEnglish !== 'NA' ? (
                                <a href={item.TextSketchEnglish}>
                                    <img
                                        className='icon-input tall unit4'
                                        alt='English Text Sketch PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    const spanishSketch = () => {
        if (Unit4SelectionSupport) {
            return Unit4SelectionSupport.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`info-row icons selections unit4 ${stripes(
                                index
                            )} tall`}>
                            {item.TextSketchSpanish !== 'NA' ? (
                                <a href={item.TextSketchSpanish}>
                                    <img
                                        className='icon-input tall unit4'
                                        alt='Spanish Text Sketch PDF'
                                        src={PDFIcon}
                                    />
                                </a>
                            ) : null}
                        </div>
                    </React.Fragment>
                );
            });
        }
    };

    return (
        <div className='unit-container'>
            <section className='above-table unit'>
                <h5 className='unit-title not-one'>Unit 4 Resources</h5>
            </section>
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit'>
                    <div className='header-row note topic-header'>
                        <h4 className='header-text topic-header-text charts-text'>
                            Multilingual Parent/Guardian Letter
                        </h4>
                    </div>
                    <div className='main-column topics-text unit'>
                        {firstColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header language'>
                        <h4 className='header-text small threeLanguages'>
                            Spanish
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit'>
                        {showSpan()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header language'>
                        <h4 className='header-text small threeLanguages'>
                            Portuguese
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit'>
                        {showPort()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header right language'>
                        <h4 className='header-text small threeLanguages haitian'>
                            Haitian Creole
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right'>
                        {showHaitian()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
            </table>
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit'>
                    <div className='header-row note topic-header'>
                        <h4 className='header-text topic-header-text charts-text'>
                            Spanish Authentic Text
                        </h4>
                    </div>
                    <div className='main-column topics-text unit authentic unit4'>
                        {bookColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header right'>
                        <h4 className='header-text small'>Spanish</h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall authentic unit4'>
                        {bookIcon()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
            </table>
            <table className='notice-note-table-container bookmark unit'>
                <section className='column topic note-charts-unit'>
                    <div className='header-row note topic-header tall'>
                        <h4 className='header-text topic-header-text charts-text tall'>
                            Selection
                        </h4>
                    </div>
                    <div className='main-column topics-text unit'>
                        {selectionsColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h4 className='header-text small tall-short multiling'>
                            Multilingual Summary
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {multiSummariesColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h4 className='header-text small tall-short summary'>
                            Summary / Adapted Text
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {adoptedColumn()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short'>
                        <h4 className='header-text small tall-short english'>
                            Text Sketch (English)
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {englishSketch()}
                    </div>
                </section>
                <section className='column topic note-charts-unit small'>
                    <div className='header-row note topic-header tall short right'>
                        <h4 className='header-text small tall-short spanish'>
                            Text Sketch (Spanish)
                        </h4>
                    </div>
                    <div className='main-column topics-text small-unit right tall'>
                        {spanishSketch()}
                    </div>
                </section>
            </table>
        </div>
    );
};

export default Unit4Resources;
