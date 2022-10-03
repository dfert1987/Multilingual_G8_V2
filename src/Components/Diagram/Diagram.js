import React from 'react';
import DiagramSVG from './DiagramSVG';
import Modals from './Modals';
import Key from './Key';
import '../../Styles/App.css';

export const Diagram = ({
    anchorCharts,
    setAnchorCharts,
    multiGlossaries,
    setMultiGlossaries,
    notice,
    setNotice,
    multiParent,
    setMultiParent,
    multiSummaries,
    setMultiSummaries,
    authentic,
    setAuthentic,
    summaries,
    setSummaries,
    textSketch,
    setTextSketch,
    setFreshLit,
    freshLit,
    opener,
    setOpener,
}) => {
    return (
        <div className='main-diagram'>
            <div className='diagram-container'>
                <DiagramSVG
                    className='diagram-svg'
                    alt='diagra'
                    anchorCharts={anchorCharts}
                    setAnchorCharts={setAnchorCharts}
                    multiGlossaries={multiGlossaries}
                    setMultiGlossaries={setMultiGlossaries}
                    notice={notice}
                    setNotice={setNotice}
                    multiParent={multiParent}
                    setMultiParent={setMultiParent}
                    multiSummaries={multiSummaries}
                    setMultiSummaries={setMultiSummaries}
                    authentic={authentic}
                    setAuthentic={setAuthentic}
                    summaries={summaries}
                    setSummaries={setSummaries}
                    textSketch={textSketch}
                    setTextSketch={setTextSketch}
                    setFreshLit={setFreshLit}
                    freshLit={freshLit}
                    opener={opener}
                    setOpener={setOpener}
                />
                <Key />
            </div>
            <div className='modals-container'>
                <Modals
                    anchorCharts={anchorCharts}
                    setAnchorCharts={setAnchorCharts}
                    multiGlossaries={multiGlossaries}
                    setMultiGlossaries={setMultiGlossaries}
                    notice={notice}
                    setNotice={setNotice}
                    multiParent={multiParent}
                    setMultiParent={setMultiParent}
                    multiSummaries={multiSummaries}
                    setMultiSummaries={setMultiSummaries}
                    authentic={authentic}
                    setAuthentic={setAuthentic}
                    summaries={summaries}
                    setSummaries={setSummaries}
                    textSketch={textSketch}
                    setTextSketch={setTextSketch}
                    setFreshLit={setFreshLit}
                    freshLit={freshLit}
                    opener={opener}
                    setOpener={setOpener}
                    className='modals'
                />
            </div>
        </div>
    );
};

export default Diagram;
