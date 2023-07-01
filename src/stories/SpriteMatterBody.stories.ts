import { Engine, Runner } from 'matter-js';
import { SpriteMatterBody } from '../SpriteMatterBody';
import { argTypes, getDefaultArgs } from './utils/argTypes';
import { Container } from '@pixi/display';
import { preloadAssets } from './utils/helpers';

const assets = {
    pixi: 'PixiLogo.png'
};

const args = {
    restitution: 1
};

type Args = typeof args;

class Story
{
    view = new Container();
    engine: Engine;
    body: SpriteMatterBody;

    constructor(props: Args)
    {
        preloadAssets(Object.values(assets)).then(() => this.init(props));
    }

    init(props: Args)
    {
        // Step 1: create matterJS engine
        this.engine = Engine.create();

        // Step 2: create hybrid pixiJS-matterJS body component
        this.body = new SpriteMatterBody(
            this.engine.world, // pass matterJS world as parameter
            {
                texture: assets.pixi,
                x: window.innerWidth / 2,
                y: -20,
            }, {
                restitution: props.restitution,
            });

        // by default, body will be destroyed and removed form the world when it falls off the screen
        // we are disabling it here as we will reset the body position manually in the update loop
        this.body.disableSelfCleanup = true;

        const staticBody = new SpriteMatterBody(
            this.engine.world, // pass matterJS world as parameter
            {
                texture: assets.pixi,
                x: (window.innerWidth / 2) - 100,
                y: window.innerHeight / 2,
            }, {
                isStatic: true,
            });

        // Step 3: Add hybrid pixiJS-matterJS body to the stage
        this.view.addChild(this.body, staticBody);

        // Step 4: Run matterJS engine
        Runner.run(this.engine);
    }

    update()
    {
        if (!this.body) return;

        if (this.body.y - this.body.width > window.innerHeight)
        {
            this.body.resetPosition(window.innerWidth / 2, -20);
        }
    }
}

export const spriteMatterBody = (params: any) => new Story(params);

export default {
    title: 'Basic',
    argTypes: argTypes(args),
    args: getDefaultArgs(args)
};
