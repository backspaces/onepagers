import util from 'https://backspaces.github.io/agentscript/src/util.js'
// You only need one of these but this is simpler than dynamic import()
import TwoDraw from 'https://backspaces.github.io/agentscript/tests/TwoDraw.js'
import TwoView from 'https://backspaces.github.io/agentscript/src/TwoView.js'
// Only needed by TwoView, built into TwoDraw
import ColorMap from 'https://backspaces.github.io/agentscript/src/ColorMap.js'

// These are the default parameters for TwoDraw:
//   patchColor: undefined, // random gray
//   turtleColor: undefined, // random color
//   linkColor: 'white',
//   linkWidth: 1,
//   shape: 'dart',
//   shapeSize: 1,
// See overrides in draw parameters below

const turtleColors = {
    infected: 'red',
    susceptible: 'blue',
    resistant: 'gray',
}

// init and run the model 500 steps, 30 fps, async (don't block browser)
export default async function run(Model, viewOptions = {}, useTwoDraw = true) {
    const model = new Model()

    await model.startup()
    model.setup()

    const view = useTwoDraw
        ? new TwoDraw(model, viewOptions)
        : new TwoView(model, viewOptions)

    // Debug: Push several properties to window from inside this module.
    util.toWindow({ model, view, util })

    if (!useTwoDraw)
        // setup static patches colors. Done by default in TwoDraw
        view.createPatchPixels(i => ColorMap.DarkGray.randomColor().pixel)

    await util.timeoutLoop(
        () => {
            model.step()
            // model.tick()

            if (useTwoDraw) {
                view.draw({
                    turtleColor: t => turtleColors[t.state],
                    shape: 'circle',
                    shapeSize: 1.5,
                    linkColor: 'rgba(255, 255, 255, 0.50',
                    linkWidth: 1,
                })
            } else {
                view.drawPatches() // redraw cached patches colors
                view.drawLinks(model.links, {
                    color: 'rgba(255, 255, 255, 0.50',
                    width: 1,
                })
                view.drawTurtles(model.turtles, t => ({
                    shape: 'circle',
                    color: turtleColors[t.state],
                    size: 1.5,
                }))
            }
        },
        500,
        33
    )

    // Debug: return a sample of the model.
    return util.sampleModel(model)
}
